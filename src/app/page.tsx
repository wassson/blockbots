import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-neutral-950 text-white">
      <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="text-5xl font-semibold text-center">Tweet in peace</h1>
          <div className="flex items-center justify-center gap-x-3 mt-6">
            <p className="text-neutral-400">instantly block</p>
            <div className="flex">
              <div className="relative w-6 h-6 outline outline-2 outline-white bg-sky-200 rounded-full">
                <Image
                  src="/images/memoji.png"
                  fill={true}
                  alt="profile picture"
                  className="mt-0.5"
                />
              </div>
              <div className="relative w-6 h-6 outline outline-2 outline-white -ml-1.5 bg-indigo-200 rounded-full">
                <Image
                  src="/images/memoji.png"
                  fill={true}
                  alt="profile picture"
                  className="mt-0.5"
                />
              </div>
              <div className="relative w-6 h-6 outline outline-2 outline-white -ml-1.5 bg-emerald-200 rounded-full">
                <Image
                  src="/images/memoji.png"
                  fill={true}
                  alt="profile picture"
                  className="mt-0.5"
                />
              </div>
            </div>
            <p className="-ml-1.5 text-neutral-400">
              <span className="text-white">+37 more</span> bots on your next
              tweet
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button className="px-4 py-1.5 text-sm font-semibold text-black rounded-full bg-white">
              Coming soon
            </button>
          </div>
          <div className="flex justify-center mt-1.5">
            <p className="text-sm text-neutral-400">~ very early 2024 ~</p>
          </div>
        </div>
      </div>
    </main>
  );
}
