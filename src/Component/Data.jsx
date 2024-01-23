import { GiBrain } from "react-icons/gi";
import { FaKissWinkHeart } from "react-icons/fa";
import { IoIosSad } from "react-icons/io";
import { RiEmotion2Fill } from "react-icons/ri";
import { BiSolidHappyAlt } from "react-icons/bi";
import { MdMoodBad } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { MdGppBad } from "react-icons/md";
import { BiSolidWinkSmile } from "react-icons/bi";

const st = { fontSize: "100px" };
const data = [
  {
    id: 0,
    quote: "Believe you can and you're halfway there.",
    category: "Motivational",
    author: "Rajat pradhan",
  },
  {
    id: 1,
    quote: "It always seems impossible until it's done.",
    category: "Motivational",
  },
  {
    id: 2,
    quote:
      "The only way to achieve the impossible is to believe it is possible.",
    category: "Motivational",
  },
  {
    id: 3,
    quote: "Your time is limited, don't waste it living someone else's life.",
    category: "Motivational",
  },
  {
    id: 4,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    category: "Motivational",
  },
  {
    id: 5,
    quote: "Believe you can and you're halfway there.",
    category: "Motivational",
  },
  {
    id: 6,
    quote: "Don't watch the clock; do what it does. Keep going.",
    category: "Motivational",
  },
  {
    id: 7,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    category: "Motivational",
  },
  {
    id: 8,
    quote: "It's not whether you get knocked down, it's whether you get up.",
    category: "Motivational",
  },
  {
    id: 9,
    quote: "Your attitude, not your aptitude, will determine your altitude.",
    category: "Motivational",
  },
  {
    id: 10,
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    category: "Motivational",
  },
  {
    id: 11,
    quote: "Your life does not get better by chance, it gets better by change.",
    category: "Motivational",
  },
  {
    id: 12,
    quote:
      "The only person you are destined to become is the person you decide to be.",
    category: "Motivational",
  },
  {
    id: 13,
    quote: "Success is not in what you have, but who you are.",
    category: "Motivational",
  },
  {
    id: 14,
    quote:
      "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
    category: "Motivational",
  },
  {
    id: 15,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    category: "Motivational",
  },
  {
    id: 16,
    quote: "Your attitude, not your aptitude, will determine your altitude.",
    category: "Motivational",
  },
  {
    id: 17,
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    category: "Motivational",
  },
  {
    id: 18,
    quote: "You don't have to be perfect to be amazing.",
    category: "Motivational",
  },
  {
    id: 19,
    quote:
      "Every morning brings new potential, but only if you make the most of it.",
    category: "Motivational",
  },
  {
    id: 20,
    quote: "Don't watch the clock; do what it does. Keep going.",
    category: "Motivational",
  },
  {
    id: 21,
    quote:
      "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    category: "Romantic",
  },
  {
    id: 22,
    quote:
      "I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had.",
    category: "Romantic",
  },
  {
    id: 23,
    quote:
      "I love you not because of who you are, but because of who I am when I am with you.",
    category: "Romantic",
  },
  {
    id: 24,
    quote:
      "If I had a flower for every time I thought of you, I could walk in my garden forever.",
    category: "Romantic",
  },
  {
    id: 25,
    quote:
      "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
    category: "Romantic",
  },
  {
    id: 26,
    quote: "The best thing to hold onto in life is each other.",
    category: "Romantic",
  },
  {
    id: 27,
    quote:
      "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    category: "Romantic",
  },
  {
    id: 28,
    quote: "Love is an endless mystery, for it has nothing else to explain it.",
    category: "Romantic",
  },
  {
    id: 29,
    quote:
      "I wish I could turn back the clock. I'd find you sooner and love you longer.",
    category: "Romantic",
  },
  {
    id: 30,
    quote: "You are my heart, my life, my one and only thought.",
    category: "Romantic",
  },
  {
    id: 31,
    quote: "Love is not just something. Love is everything.",
    category: "Romantic",
  },
  {
    id: 32,
    quote: "When I follow my heart, it leads me to you.",
    category: "Romantic",
  },
];

const category = [
  {
    id: 0,
    category: "Motivational",
    color: "#5F8670",
    icon: <GiBrain style={st} />,
  },
  {
    id: 1,
    category: "Romantic",
    color: "#BF3131",
    icon: <FaKissWinkHeart style={st} />,
  },
  { id: 2, category: "Sad", color: "#B2A59B", icon: <IoIosSad style={st} /> },
  {
    id: 3,
    category: "Emotional",
    color: "#304D30",
    icon: <RiEmotion2Fill style={st} />,
  },
  {
    id: 4,
    category: "Wholesome",
    color: "blue",
    icon: <BiSolidHappyAlt style={st} />,
  },
  { id: 5, category: "Bad", color: "#FF90BC", icon: <MdMoodBad style={st} /> },
  {
    id: 6,
    category: "Clever",
    color: "#52D3D8",
    icon: <HiLightBulb style={st} />,
  },
  { id: 7, category: "Dirty", color: "purple", icon: <MdGppBad style={st} /> },
  {
    id: 8,
    category: "Cute",
    color: "#200E3A",
    icon: <BiSolidWinkSmile style={st} />,
  },
];

export default data;
export { category };
