import { useState, useEffect } from "react";
import { supabase } from "@/supabase";
import Head from "next/head";
import Image from "next/image";

export default function Home({ grantees, numFuturists }) {
  const [visible, setVisible] = useState([]);

  // add one tweet every 400 ms
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setVisible((v) => [...v, grantees[i++]]);
      if (i >= grantees.length) clearInterval(id);
    }, 400);
    return () => clearInterval(id);
  }, [grantees]);

  // hydrate new embeds
  useEffect(() => {
    if (window?.twttr?.widgets) window.twttr.widgets.load();
  }, [visible]);

  return (
    <>
      <Head>
        <title>RED BULL FUTURISM MICRO GRANT FUND</title>
        <script async src="https://platform.twitter.com/widgets.js" />
      </Head>

      <div className="min-h-screen lg:bg-[url('/fund-image.jpg')] lg:bg-[length:100%_auto] lg:bg-no-repeat lg:bg-top">
        <div className="relative bg-white bg-opacity-20 min-h-screen p-2">
          {/* hero + copy (unchanged) */}
          <div className="relative bg-white bg-opacity-20 min-h-screen p-2">
            <div
              className="
    max-w-4xl
    m-auto
    p-4
    bg-white
    
    lg:border-black
    lg:border-opacity-10
    border-transparent
    bg-opacity-20
    backdrop-blur-2xl
    rounded-lg
  "
            >
              <p className="font-serif text-3xl text-center">
                RED BULL FUTURISM
              </p>
              <p className="font-serif text-3xl text-center">
                MICRO GRANT FUND
              </p>

              <p className="text-center font-serif text-lg mt-2">
                We give microgrants ($4) to anyone in need of a pick me up.
              </p>
              <p className="text-center font-serif text-lg">
                Simply tweet what you're working on to{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/redbullfuturist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @redbullfuturist
                </a>
                , use the{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/hashtag/RedBullFund"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  #redbullfund
                </a>
                , and if it sounds cool, win some money so you can go buy a Red
                Bull!
              </p>
              <p className="text-center mt-2 font-serif">
                Caffeinated{" "}
                <span className="font-sans font-bold">{numFuturists}</span>{" "}
                Futurists and counting.
              </p>

              <div className="block lg:hidden">
                <Image
                  className="m-auto"
                  src="/fund-image.jpg"
                  height={500}
                  width={500}
                  alt="Fund Image"
                />
              </div>

              <p className="mt-4 text-xs text-center">
                Special thanks to{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/kaeladair"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @kaeladair
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/zanehengsperger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @zanehengsperger
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/Robot_Brains"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Robot_Brains
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/iamjasonlevin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @iamjasonlevin
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/jimbelosic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @jimbelosic
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/DavidZagaynov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @DavidZagaynov
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/tylercosg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @tylercosg
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/withtenacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @withtenacity
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/sporadicalia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @sporadicalia
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/tobyfenner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @tobyfenner
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/heyecs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @heyecs
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/inyouendohs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @inyouendohs
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/grapplingdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @grapplingdev
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/2fat4karting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @2fat4karting
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/rashad_ahmadov_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @rashad_ahmadov_
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/andrewmccalip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @andrewmccalip
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/codyaims"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @codyaims
                </a>{" "}
                <a
                  className="text-blue-800 cursor-pointer "
                  href="https://x.com/Hugo_Peterson6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Hugo_Peterson6
                </a>
              </p>
            </div>

            {/* tweets */}
            <div className="flex flex-col gap-4 items-center px-4 w-full mx-auto mt-8">
              {visible.map(
                (t) =>
                  t != undefined &&
                  t.tweet_id && (
                    <blockquote
                      key={t.tweet_id}
                      className="twitter-tweet break-inside-avoid m-auto"
                    >
                      <a
                        href={`https://twitter.com/anyuser/status/${t.tweet_id}`}
                      ></a>
                    </blockquote>
                  )
              )}
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data: grantees = [], error } = await supabase
    .from("rbf")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error(error);

  const nullTweetRow = grantees.find((r) => r.tweet_id === null);
  const numFuturists = nullTweetRow ? nullTweetRow.text : null;

  return { props: { grantees, numFuturists } };
}

/*import { supabase } from "@/supabase";
import Head from "next/head";
import Image from "next/image";

export default function Home({ grantees, numFuturists }) {
  return (
    <>
      <Head>
        <title>RED BULL FUTURISM MICRO GRANT FUND</title>
      </Head>

      <div
        className="
        min-h-screen
        bg-none
        lg:bg-[url('/fund-image.jpg')]
          lg:bg-[length:100%_auto]
          lg:bg-no-repeat
          lg:bg-top
      "
      >
        <div className="relative bg-white bg-opacity-20 min-h-screen p-2">
          <div
            className="
    max-w-4xl
    m-auto
    p-4
    bg-white
    
    lg:border-black
    lg:border-opacity-10
    border-transparent
    bg-opacity-20
    backdrop-blur-2xl
    rounded-lg
  "
          >
            <p className="font-serif text-3xl text-center">RED BULL FUTURISM</p>
            <p className="font-serif text-3xl text-center">MICRO GRANT FUND</p>

            <p className="text-center font-serif text-lg mt-2">
              We give microgrants ($4) to anyone in need of a pick me up.
            </p>
            <p className="text-center font-serif text-lg">
              Simply tweet what you're working on to{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/redbullfuturist"
                target="_blank"
                rel="noopener noreferrer"
              >
                @redbullfuturist
              </a>
              , use the{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/hashtag/RedBullFund"
                target="_blank"
                rel="noopener noreferrer"
              >
                #redbullfund
              </a>
              , and if it sounds cool, win some money so you can go buy a Red
              Bull!
            </p>
            <p className="text-center mt-2 font-serif">
              Caffeinated{" "}
              <span className="font-sans font-bold">{numFuturists}</span>{" "}
              Futurists and counting.
            </p>

            <div className="block lg:hidden">
              <Image
                className="m-auto"
                src="/fund-image.jpg"
                height={500}
                width={500}
                alt="Fund Image"
              />
            </div>

            <p className="mt-4 text-xs text-center">
              Special thanks to{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/kaeladair"
                target="_blank"
                rel="noopener noreferrer"
              >
                @kaeladair
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/zanehengsperger"
                target="_blank"
                rel="noopener noreferrer"
              >
                @zanehengsperger
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/Robot_Brains"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Robot_Brains
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/iamjasonlevin"
                target="_blank"
                rel="noopener noreferrer"
              >
                @iamjasonlevin
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/jimbelosic"
                target="_blank"
                rel="noopener noreferrer"
              >
                @jimbelosic
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/DavidZagaynov"
                target="_blank"
                rel="noopener noreferrer"
              >
                @DavidZagaynov
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/tylercosg"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tylercosg
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/withtenacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                @withtenacity
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/sporadicalia"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sporadicalia
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/tobyfenner"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tobyfenner
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/heyecs"
                target="_blank"
                rel="noopener noreferrer"
              >
                @heyecs
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/inyouendohs"
                target="_blank"
                rel="noopener noreferrer"
              >
                @inyouendohs
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/grapplingdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                @grapplingdev
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/2fat4karting"
                target="_blank"
                rel="noopener noreferrer"
              >
                @2fat4karting
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/rashad_ahmadov_"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rashad_ahmadov_
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/andrewmccalip"
                target="_blank"
                rel="noopener noreferrer"
              >
                @andrewmccalip
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/codyaims"
                target="_blank"
                rel="noopener noreferrer"
              >
                @codyaims
              </a>{" "}
              <a
                className="text-blue-800 cursor-pointer "
                href="https://x.com/Hugo_Peterson6"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Hugo_Peterson6
              </a>
            </p>
            {/*
            <a
              href="https://t.co/PxsNy1L4zw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32"
            >
              <Image
                src="/substack-icon.png"
                alt="Substack"
                width={30}
                height={30}
                className="bg-black bg-opacity-10 rounded m-auto mt-2 lg:m-0 lg:bg-opacity-20"
              />
          </a>
          </div>

          <div className="mx-auto px-4 w-full columns-1 sm:columns-2 lg:columns-3 gap-4 mt-8">
            {grantees.map((tweet) => (
              <>
                {tweet.tweet_id != null && (
                  <div
                    key={tweet.tweet_id}
                    className="break-inside-avoid m-auto"
                  >
                    <blockquote className="twitter-tweet">
                      <a
                        href={`https://twitter.com/anyuser/status/${tweet.tweet_id}`}
                      ></a>
                    </blockquote>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
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

  const nullTweetRow = grantees.find((row) => row.tweet_id === null);
  const numFuturists = nullTweetRow ? nullTweetRow.text : null;

  return {
    props: {
      grantees,
      numFuturists,
    },
  };
}
*/
