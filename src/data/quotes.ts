export const QUOTES = [
  "At the core, what truly motivates me is the process of breaking down the code — understanding how each line works, why a system behaves the way it does, and how it can be rebuilt in a cleaner and more efficient way. For me, learning isn't just about making things work, but about deeply understanding them.",

  "Code is poetry written for machines, but it should be readable by humans. Every function, every variable name matters. I believe in writing code that tells a story.",

  "The best code is not the most complex one, but the one that solves the problem elegantly and can be understood at first glance.",

  "No man is your enemy, no man is your friend, every man is your teacher.",

  "Greatness is not achieved through talent alone, but through the relentless pursuit of mastery. Every struggle shapes your path.",

  "In this world, there are things one must do, even if they are not pleasant. If you pursue nothing, you will achieve nothing.",

  "A true warrior understands that the greatest battle is not against others, but against oneself.",

  "I want to be a strong person",
];

export function getRandomQuote(): string {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
