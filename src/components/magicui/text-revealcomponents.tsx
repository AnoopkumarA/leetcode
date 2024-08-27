import TextReveal from "./text-reveal";
import '../../App.css'

export function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] flex-col items-center justify-center rounded-lg bg-black/10 p-6">
      {/* Paragraph with TextReveal */}
      <TextReveal text="Welcome to LeetCode Diaries, where our mission is to transform aspiring developers into coding experts. We are dedicated to helping you master coding challenges, learn new programming concepts, and build impressive web development projects. Our channel is your go-to resource for navigating the world of coding and achieving your career goals." />

      {/* Heading with TextReveal */}
      <div className="-mt-[83rem] md:-mt-[86rem] text-2xl  font-medium text-center text-black dark:text-white">
        <TextReveal text="Why Web Development?" />
      </div>

      <div className="-mt-[77.4rem] md:-mt-[85.6rem] text-2xl font-medium text-center text-black dark:text-white">
        <TextReveal text="In today's digital age, web development is one of the most sought-after skills. The internet is an integral part of our lives, and every business, big or small, requires a strong online presence. Web developers are the architects behind these digital experiences, creating websites and applications that are not only functional but also user-friendly and visually appealing.
At LeetCode Diaries, we understand the importance of mastering web development. It’s a field that constantly evolves, with new technologies, frameworks, and tools emerging regularly. To stay ahead, you need to be continuously learning and adapting. That’s where we come in." />
      </div>
      
    </div>
  );
}
