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
  { id: 18, quote: "To be great is to be misunderstood.", author: "Ralph Waldo Emerson" },
  { id: 19, quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { id: 20, quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { id: 21, quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { id: 22, quote: "I think, therefore I am.", author: "René Descartes" },
  { id: 23, quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { id: 24, quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { id: 25, quote: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
  { id: 26, quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  { id: 27, quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
  { id: 28, quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
  { id: 29, quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { id: 30, quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" }
];

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
