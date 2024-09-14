variable "image_name" {
  description = "The name of the Docker image to build and push to ECR"
  type        = string
  default     = "my-nginx"
}
