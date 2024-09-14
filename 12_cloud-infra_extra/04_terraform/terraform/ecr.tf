resource "aws_ecr_repository" "main" {
  name         = "praha-challenge-repo"
  force_delete = true
}

resource "null_resource" "docker_push" {
  provisioner "local-exec" {
    command = <<EOF
      cd ./docker
      docker build -t ${var.image_name} .
      aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin ${aws_ecr_repository.main.repository_url}
      docker tag ${var.image_name}:latest ${aws_ecr_repository.main.repository_url}:latest
      docker push ${aws_ecr_repository.main.repository_url}:latest
    EOF
  }
  depends_on = [aws_ecr_repository.main]
}
