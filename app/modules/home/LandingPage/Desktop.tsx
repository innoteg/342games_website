
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      {/* 左侧视频部分 */}
      <div className="flex-1 flex justify-center items-center">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          poster="/images/homeVideo.png"
        >
          <source src="/videos/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 右侧背景和图标 */}
      <div className="flex-1 relative">
        <Image
          src="/images/bg-font.png"
          alt="Background Font"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <Image
          src="/images/deerIcon.png"
          alt="Deer Icon"
          width={100}
          height={100}
          className=""
        />
      </div>
    </div>
  );
}