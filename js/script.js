 
  // Get DOM elements
  const quoteContent = document.getElementById("quoteContent");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const generateBtn = document.getElementById("generateBtn");
  const addToFavoritesBtn = document.getElementById("addToFavoritesBtn");
  const favoriteQuotes = document.getElementById("favoriteQuotes");
  
  // Array favs quotes
  let favorites = [];
  
  // Generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { content, author } = quotes[randomIndex];
    quoteContent.textContent = content;
    quoteAuthor.textContent = author;
  }
  
  // Check if a quote is already in favorites
  function isQuoteInFavorites(quote) {
    return favorites.some((favQuote) => {
      return (
        favQuote.content == quote.content &&
        favQuote.author == quote.author
      );
    });
  }
  
  // Add a quote to favorites
  function addToFavorites() {
    const content = quoteContent.textContent;
    const author = quoteAuthor.textContent;
    const quote = { content, author };
  
    if (isQuoteInFavorites(quote)) {
      alert("This quote is already in your favorites!");
      return;
    }
  
    favorites.push(quote);
    const li = document.createElement("li");
    const quoteText = document.createTextNode(`${content} - ${author}`);
    const removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      favoriteQuotes.removeChild(li);
      favorites = favorites.filter((favQuote) => {
        return (
          favQuote.content != quote.content ||
          favQuote.author != quote.author
        );
      });
    });

    li.appendChild(quoteText);
    li.appendChild(removeBtn);
    favoriteQuotes.appendChild(li);
  }
  
 
  generateBtn.addEventListener("click", generateQuote);
  addToFavoritesBtn.addEventListener("click", addToFavorites);
  