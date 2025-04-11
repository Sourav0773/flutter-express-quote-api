import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT

const quotes = [
  { id: 1, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 2, quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { id: 3, quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { id: 4, quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { id: 5, quote: "It is not length of life, but depth of life.", author: "Ralph Waldo Emerson" },
  { id: 6, quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { id: 7, quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { id: 8, quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { id: 9, quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { id: 10, quote: "So many books, so little time.", author: "Frank Zappa" },
  { id: 11, quote: "The truth will set you free, but first it will make you miserable.", author: "James A. Garfield" },
  { id: 12, quote: "To be great is to be misunderstood.", author: "Ralph Waldo Emerson" },
  { id: 13, quote: "I am not afraid of tomorrow, for I have seen yesterday and I love today.", author: "William Allen White" },
  { id: 14, quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
  { id: 15, quote: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { id: 16, quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
  { id: 17, quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { id: 18, quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { id: 19, quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { id: 20, quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { id: 21, quote: "I think, therefore I am.", author: "René Descartes" },
  { id: 22, quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { id: 23, quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { id: 24, quote: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
  { id: 25, quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  { id: 26, quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
  { id: 27, quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
  { id: 28, quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { id: 29, quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { id: 30, quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { id: 31, quote: "The mind is everything. What you think you become.", author: "Buddha" },
  { id: 32, quote: "An unexamined life is not worth living.", author: "Socrates" },
  { id: 33, quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { id: 34, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { id: 35, quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { id: 36, quote: "Get busy living or get busy dying.", author: "Stephen King" },
  { id: 37, quote: "You have enemies? Good. That means you've stood up for something, sometime in your life.", author: "Winston Churchill" },
  { id: 38, quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { id: 39, quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
  { id: 40, quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { id: 41, quote: "If you can dream it, you can do it.", author: "Walt Disney" },
  { id: 42, quote: "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.", author: "Mother Teresa" },
  { id: 43, quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { id: 44, quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { id: 45, quote: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { id: 46, quote: "What we think, we become.", author: "Buddha" },
  { id: 47, quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  { id: 48, quote: "Life is short, and it's up to you to make it sweet.", author: "Sarah Louise Delany" },
  { id: 49, quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { id: 50, quote: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
  { id: 51, quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { id: 52, quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { id: 53, quote: "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.", author: "Reba McEntire" },
  { id: 54, quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
  { id: 55, quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
  { id: 56, quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
  { id: 57, quote: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { id: 58, quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { id: 59, quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { id: 60, quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { id: 61, quote: "You need to be prepared for failure before you can take the risks for success.", author: "Nikki Giovanni" },
  { id: 62, quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { id: 63, quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston S. Churchill" },
  { id: 64, quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { id: 65, quote: "Success isn't just about what you accomplish in your life. It's about what you inspire others to do.", author: "Unknown" },
  { id: 66, quote: "You are enough just as you are.", author: "Megan Markle" },
  { id: 67, quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { id: 68, quote: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { id: 69, quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { id: 70, quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
  { id: 71, quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
  { id: 72, quote: "Progress is impossible without change, and those who cannot change their minds cannot change anything.", author: "George Bernard Shaw" },
  { id: 73, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { id: 74, quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { id: 75, quote: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
  { id: 76, quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { id: 77, quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { id: 78, quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { id: 79, quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { id: 80, quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { id: 81, quote: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
  { id: 82, quote: "Success is how high you bounce when you hit bottom.", author: "General George Patton" },
  { id: 83, quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { id: 84, quote: "You must expect great things of yourself before you can do them.", author: "Michael Jordan" },
  { id: 85, quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { id: 86, quote: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
  { id: 87, quote: "The best way to cheer yourself is to try to cheer someone else up.", author: "Mark Twain" },
  { id: 88, quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { id: 89, quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
  { id: 90, quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { id: 91, quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { id: 92, quote: "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead.", author: "Nelson Mandela" },
  { id: 93, quote: "Opportunities multiply as they are seized.", author: "Sun Tzu" },
  { id: 94, quote: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", author: "Booker T. Washington" },
  { id: 95, quote: "Happiness is not a goal; it is a by-product.", author: "Eleanor Roosevelt" },
  { id: 96, quote: "The best dreams happen when you’re awake.", author: "Cherie Gilderbloom" },
  { id: 97, quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { id: 98, quote: "Success is the ability to go from one failure to another with no loss of enthusiasm.", author: "Winston Churchill" },
  { id: 99, quote: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
  { id: 100, quote: "Limit your 'always' and your 'nevers'.", author: "Amy Poehler" },
];

// Pagination middleware
app.get('/quotes', (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to first page
  const limit = parseInt(req.query.limit) || 10; // Default to 10 quotes per page
  const startIndex = (page - 1) * limit; // Calculate starting index
  const endIndex = page * limit; // Calculate ending index

  // Get paginated quotes
  const results = {};

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  if (endIndex < quotes.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  results.quotes = quotes.slice(startIndex, endIndex);
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});