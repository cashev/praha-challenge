import { useEffect, useState } from "react";

export const FetchComponent = () => {
  const [data, setData] = useState({
    subscribers: 0,
    stars: 0
  });

  // ここでuseEffectを使ってstar数を取得してみましょう!
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData({
          stars: json.stargazers_count
        });
      });
  }, []);

  return (
    <div>
      <p>ここにReactのGitHubレポジトリに付いたスターの数を表示してみよう</p>
      <p>{data.stars} stars</p>
    </div>
  );
};
