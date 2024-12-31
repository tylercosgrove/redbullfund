import { supabase } from "@/supabase";
import Head from "next/head";

export default function Home({ grantees }) {
  return (
    <>
      <Head>
        <title>Red Bull Fund</title>
      </Head>
      <div className="w-fit m-auto mt-4 p-2">
        <p className="font-serif text-4xl text-center">RED BULL FUND</p>
        <p className="text-center font-serif text-lg mt-2">
          We give microgrants ($4) to anyone in need of a pick me up.
        </p>
        <p className="text-center font-serif text-lg">
          Simply tweet what you're working on to{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="https://x.com/redbullfuturist"
            target="_blank"
            rel="noopener noreferrer"
          >
            @redbullfuturist
          </a>
          , and if it sounds cool, win some money so you can go buy a Red Bull!
        </p>

        <p className="mt-4 text-xs text-center">
          Special thanks to{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="https://x.com/kaeladair"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kaeladair
          </a>{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="https://x.com/zanehengsperger"
            target="_blank"
            rel="noopener noreferrer"
          >
            @zanehengsperger
          </a>{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="https://x.com/Robot_Brains"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Robot_Brains
          </a>{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="https://x.com/iamjasonlevin"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iamjasonlevin
          </a>{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="https://x.com/jimbelosic"
            target="_blank"
            rel="noopener noreferrer"
          >
            @jimbelosic
          </a>{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="https://x.com/tylercosg"
            target="_blank"
            rel="noopener noreferrer"
          >
            @tylercosg
          </a>
        </p>
        {/*<p className="text-xs text-center">
          Want to help out? Send{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="https://x.com/redbullfuturist"
            target="_blank"
            rel="noopener noreferrer"
          >
            @redbullfuturist
          </a>{" "}
          a DM.
  </p>*/}
      </div>

      <div className="mx-auto px-4 w-full columns-1 sm:columns-2 lg:columns-3 gap-4">
        {grantees.map((tweet) => (
          <div key={tweet.tweet_id} className="break-inside-avoid">
            <blockquote className="twitter-tweet max-w-sm">
              <a
                href={`https://twitter.com/anyuser/status/${tweet.tweet_id}`}
              ></a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
            </blockquote>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data: grantees, error } = await supabase
    .from("rbf")
    .select("*")
    .order("created_at", { ascending: false }); // Sort by 'created_at' descending (newest first)

  if (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        grantees: [],
      },
    };
  }

  return {
    props: {
      grantees,
    },
  };
}
