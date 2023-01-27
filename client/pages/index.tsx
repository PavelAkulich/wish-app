import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const { pathname, push } = useRouter();
  const [redir, setRedir] = useState<boolean>(false);
  useEffect(() => {
    if (redir) push("/authorization");
  }, [pathname, redir]);
  return (
    <div className="text-red-400">
      <button onClick={() => setRedir(true)}>test</button>
    </div>
  );
}
