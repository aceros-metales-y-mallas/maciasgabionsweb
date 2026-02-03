#!/bin/bash

# Macias Gabions Website Deployment Script
# This script deploys the website to AWS S3 and invalidates CloudFront cache

# Configuration
BUCKET_NAME="macias-gabions-website"
DISTRIBUTION_ID="YOUR_CLOUDFRONT_DISTRIBUTION_ID"
REGION="us-east-1"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}Macias Gabions Website Deployment${NC}"
echo -e "${YELLOW}========================================${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    echo "Please install AWS CLI: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if configuration is set
if [ "$DISTRIBUTION_ID" == "YOUR_CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${YELLOW}Warning: Please update DISTRIBUTION_ID in this script${NC}"
    echo "Skipping CloudFront invalidation..."
    SKIP_INVALIDATION=true
fi

echo -e "${GREEN}Step 1: Syncing files to S3...${NC}"

# Sync files to S3
aws s3 sync . s3://$BUCKET_NAME \
  --region $REGION \
  --exclude ".git/*" \
  --exclude ".gitignore" \
  --exclude "README.md" \
  --exclude "Dockerfile" \
  --exclude "docker-compose.yml" \
  --exclude "deploy.sh" \
  --exclude "s3-bucket-policy.json" \
  --exclude "*.DS_Store" \
  --delete \
  --cache-control "public, max-age=31536000" \
  --exclude "*.html" \
  --exclude "sitemap.xml" \
  --exclude "robots.txt"

# Upload HTML files with different cache control
echo -e "${GREEN}Step 2: Uploading HTML files...${NC}"
aws s3 sync . s3://$BUCKET_NAME \
  --region $REGION \
  --include "*.html" \
  --cache-control "public, max-age=0, must-revalidate"

# Upload sitemap and robots.txt
echo -e "${GREEN}Step 3: Uploading sitemap and robots.txt...${NC}"
aws s3 sync . s3://$BUCKET_NAME \
  --region $REGION \
  --include "sitemap.xml" \
  --include "robots.txt" \
  --cache-control "public, max-age=3600"

if [ "$SKIP_INVALIDATION" != true ]; then
    echo -e "${GREEN}Step 4: Invalidating CloudFront cache...${NC}"
    
    # Create CloudFront invalidation
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
      --distribution-id $DISTRIBUTION_ID \
      --paths "/*" \
      --query 'Invalidation.Id' \
      --output text)
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}CloudFront invalidation created: $INVALIDATION_ID${NC}"
        echo "Waiting for invalidation to complete (this may take a few minutes)..."
        
        aws cloudfront wait invalidation-completed \
          --distribution-id $DISTRIBUTION_ID \
          --id $INVALIDATION_ID
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}CloudFront cache invalidated successfully!${NC}"
        else
            echo -e "${YELLOW}Warning: Invalidation is still in progress${NC}"
        fi
    else
        echo -e "${RED}Error creating CloudFront invalidation${NC}"
    fi
else
    echo -e "${YELLOW}Step 4: Skipped CloudFront invalidation${NC}"
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
if [ "$SKIP_INVALIDATION" != true ]; then
    echo "CloudFront URL: https://YOUR_DISTRIBUTION_DOMAIN"
fi
echo ""
