variable "image_name" {
  description = "The name of the Docker image to build and push to ECR"
  type        = string
  default     = "my-nginx"
}

variable "db_password" {
  description = "RDS root user password"
  type        = string
  sensitive   = true
}
