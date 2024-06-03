const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]



articles.forEach((article)=>{
    // Create a Article element and store it in a variable
    let bookArticle = document.createElement('article')
	let bookdesc = document.createElement('div')
	bookdesc.classList.add("book-desc")


	let bookdesc_info = `
	<p class = "date">July 5, 2022</p>
	
	<p class = "info"></p>
	<p>10-14</p>
	<p>Fantasy</p>
	<p>****</p>`

	let article_info = ` <div class = 'first_book' id="first_book">
	<p class = "title"> ${article.title}</p>
	<img src="https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg" alt="Image of the book Magyk">

	<p>If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.
		<a href="#">Read More...</a>  

	</p>
</div> `


bookArticle.innerHTML = article_info
bookdesc.innerHTML = bookdesc_info


	let bookHolder = document.getElementById("books")
    bookHolder.appendChild(bookArticle)
	bookHolder.appendChild(bookdesc)
 
 
  })