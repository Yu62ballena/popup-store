/*============================================================================*\
 *
 *                    scroll To 
 *
 \*============================================================================*/
// スクロール関数
function scrollToElement(
  targetSelector,
  duration = 0.7,
  offsetY = 30,
  ease = "power2.inOut"
) {
  gsap.to(window, {
    duration: duration,
    scrollTo: {
      y: targetSelector,
      offsetY: offsetY,
    },
    ease: ease,
  });
}

// 使用例
document.querySelector("#messageBtn").addEventListener("click", () => {
  scrollToElement("#message");
});

document.querySelector("#menuBtn").addEventListener("click", () => {
  scrollToElement("#menu");
});

document.querySelector("#accessBtn").addEventListener("click", () => {
  // 必要に応じてパラメータをカスタマイズ
  scrollToElement("#access", 0.7, 0);
});

/*============================================================================*\
 *
 *                 title text animation 
 *
 \*============================================================================*/
const titleAnimation = new SplitText(".header .content h1", { type: "chars" });
const chars = titleAnimation.chars;

gsap.from(chars, {
  autoAlpha: 0,
  y: 50,
  stagger: 0.08,
  // filter: "blur(30px)",
  ease: "elastic.out(1,0.3)",
  duration: 1,
});

/*============================================================================*\
 *
 *                    message 
 *
 \*============================================================================*/
const messageAnimation = new SplitText(".message h2, .message p", {
  type: "lines",
});
const messageLines = messageAnimation.lines;

gsap.from(messageLines, {
  autoAlpha: 0,
  y: 50,
  stagger: 0.15,
  duration: 1,
  scrollTrigger: {
    trigger: ".message",
    start: "top 60%",
  },
});

/*============================================================================*\
 *
 *             Hero 
 *
 \*============================================================================*/
const heroAnimation = gsap.timeline();

heroAnimation
  .from(".header .bg-images", { autoAlpha: 0, duration: 3.0 })
  // .from(".header .content h1", { autoAlpha: 0, y: 100, duration: 1.5 }, "1")
  .from(".header .menu .logo", { autoAlpha: 0, y: -100, duration: 0.8 }, ">-2")
  .from(
    ".header .menu .links ul li",
    { autoAlpha: 0, y: -100, duration: 0.8, stagger: 0.2 },
    ">-0.5"
  )
  .from(".header .content .date", { autoAlpha: 0, duration: 0.8, y: 100 }, "<");

/*============================================================================*\
 *
 *               menu 
 *
 \*============================================================================*/

//  タイトル
const menuTitle = new SplitText(".menu h2", { type: "chars" });
const menuChars = menuTitle.chars;

gsap.from(menuChars, {
  autoAlpha: 0,
  y: 50,
  stagger: 0.1,
  // filter: "blur(30px)",
  ease: "back.out",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".menu h2",
    start: "top 60%",
  },
});

// メニューカード
const menuCards = gsap.utils.toArray(".menu .cards .card");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards",
    start: "top 60%",
  },
});

menuCards.forEach((card, index) => {
  tl.from(
    card,
    {
      duration: 0.7,
      autoAlpha: 0,
      y: 100,
      ease: "back.out",
      filter: "blur(30px)",
    },
    index * 0.3
  );
});

/*============================================================================*\
 *
 *                 belt 
 *
 \*============================================================================*/
const beltAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".belt",
    start: "top 60%",
  },
});

beltAnimation
  .from(".belt .leftImage", {
    autoAlpha: 0,
    y: 100,
    x: -100,
    duration: 1,
    filter: "blur(30px)",
  })
  .from(
    ".belt .rightImage",
    { autoAlpha: 0, y: 100, x: 100, duration: 1, filter: "blur(30px)" },
    "<"
  );

/*============================================================================*\
 *
 *                access 
 *
 \*============================================================================*/
//  タイトル
const accessTitle = new SplitText(".access h2", { type: "lines" });
const accessLines = accessTitle.lines;

gsap.from(accessLines, {
  autoAlpha: 0,
  y: 50,
  stagger: 0.05,
  // filter: "blur(30px)",
  ease: "back.out",
  duration: 0.3,
  scrollTrigger: {
    trigger: ".access h2",
    start: "top 60%",
  },
});

// テキスト部分
function animateElements() {
  const icons = document.querySelectorAll(".address .content-wrapper i");

  const headings = new SplitText(".address h3", { type: "chars" });
  const paragraphs = new SplitText(".address p", { type: "chars" });

  const allElements = [...icons, ...headings.chars, ...paragraphs.chars];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".address",
      start: "top 60%",
    },
  });

  tl.fromTo(
    allElements,
    {
      autoAlpha: 0,
      rotation: -90,
      transformOrigin: "0% 100%",
      filter: "blur(5px)",
    },
    {
      autoAlpha: 1,
      rotation: 0,
      stagger: 0.02,
      duration: 0.3,
      ease: "power2.out",
      filter: "blur(0px)",
    }
  );
}

window.addEventListener("load", animateElements);

/*============================================================================*\
 *
 *            footer 
 *
 \*============================================================================*/
const footerTextAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
  },
});

footerTextAnimation
  .from(".footer .footer-container", {
    autoAlpha: 0,
    scale: 3,
    duration: 0.5,
    filter: "blur(20px)",
  })
  .from(
    ".footer img",
    { autoAlpha: 0, scale: 3, duration: 0.8, filter: "blur(20px)" },
    "-=0.4"
  );

/*============================================================================*\
 *
 *                 splide 
 *
 \*============================================================================*/
const splide = new Splide(".splide", {
  type: "fade", // フェードエフェクト
  rewind: true, // 最後のスライドから最初に戻る
  autoplay: true, // 自動再生
  interval: 5000, // 6秒ごとに切り替え
  arrows: false, // 矢印を非表示
  pagination: true, // ページネーション（ドット）も非表示
  speed: 4000, // トランジション速度（5秒）
  pauseOnHover: false, // ホバー時に一時停止しない
});

splide.mount();

/*============================================================================*\
 *
 *               sns 
 *
 \*============================================================================*/
const snsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".sns",
    start: "top 80%",
  },
});

snsAnimation.from(".sns", { autoAlpha: 0, y: 50 });
