terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "praha-challenge-terraform"
    key    = "terraform.tfstate"
  }
}

resource "aws_vpc" "example" {
  cidr_block = "10.0.0.0/16"
}
