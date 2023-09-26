import { Either, left, right } from 'fp-ts/lib/Either';

class Post {
  constructor(private readonly text: string) {}

  public static create(text: string): Either<Error, Post> {
    if (text.length > 1000) {
      return left(new Error('blog post too long!'));
    }
    const post = new Post(text);
    return right(post);
  }
}
