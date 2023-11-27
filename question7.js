// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

//SE HIT: läste för slarvigt. såg i sista sekund att title och body skulle appendas i diven som heter "posts". Lade istället till det i "body. "

let posts;

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    posts = await response.json();
    console.log(posts);

    const body = document.body;

    posts.forEach((post) => {
      if (post.userId === 1) {
        const postDiv = document.createElement("div");
        postDiv.setAttribute("class", "posts");
        body.appendChild(postDiv);
        const postTitle = document.createElement("h1");
        postTitle.textContent = post.title;

        postTitle.classList.add("postTitle");
        postDiv.appendChild(postTitle);

        const postBody = document.createElement("p");
        postBody.textContent = post.body;
        postBody.classList.add("postBody");
        postDiv.appendChild(postBody);

        // postDiv.style.padding = "20px";
        // postDiv.style.margin = "10px";
        // postTitle.style.color = "grey";
        // postTitle.style.fontWeight = "bold";
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getPosts();

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

// let posts2;

// async function getPosts2() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     posts = await response.json();
//     console.log(posts);

//     const body = document.body;
//     body.classList.add("bodyContainer");

//     posts.forEach((post) => {
//       if (post.userId === 1) {
//         const postDiv = document.createElement("div");
//         const postTitle = document.createElement("h1");
//         const postBody = document.createElement("p");

//         postTitle.textContent = post.title;
//         postBody.textContent = post.body;

//         postDiv.setAttribute("id", "posts");
//         postTitle.classList.add("postTitle");
//         postBody.classList.add("postBody");

//         postDiv.style.padding = "20px";
//         postDiv.style.margin = "10px";
//         postDiv.style.margin = "10px";
//         postTitle.style.color = "grey";
//         postTitle.style.fontWeight = "bold";

//         body.appendChild(postDiv);
//         postDiv.appendChild(postTitle);
//         postDiv.appendChild(postBody);
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// getPosts();

// async function getComments(postId) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
//     );

//     comments = await response.json();
//     console.log(comments);

//     const body = document.body;
//     body.classList.add("bodyContainer");

//     comments.forEach((comment) => {
//       const commentDiv = document.createElement("div");
//       const commentName = document.createElement("p");
//       const commentBody = document.createElement("p");

//       commentName.textContent = comment.name;
//       commentBody.textContent = comment.body;

//       commentDiv.setAttribute("id", "posts");
//       commentName.classList.add("postTitle");
//       commentBody.classList.add("postBody");

//       commentDiv.style.padding = "20px";
//       commentDiv.style.margin = "10px";
//       commentDiv.style.margin = "10px";
//       commentName.style.color = "grey";
//       commentName.style.fontWeight = "bold";

//       body.appendChild(commentDiv);
//       commentDiv.appendChild(commentName);
//       commentDiv.appendChild(commentBody);
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// getComments();
