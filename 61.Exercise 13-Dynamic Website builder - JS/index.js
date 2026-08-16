function CreatedCard(Title, Cname, views, monthsold, duration, thumbnail) {
    let viewStr
    if (views<1000) {
         viewStr = views ;

    }
    else if (views>1000000) {
         viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";

    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${Title}</h1>
                <p>${Cname} . ${viewStr} views . ${monthsold} months ago </p>
            </div>

</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

CreatedCard("Introduction to backend | Sigma web dev vedio #2", "CodewithFarhan", 560000, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")

 CreatedCard("Introduction to Express Js | Sigma web dev vedio #3", "CodewithFarhan", 56000, 9, "41:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")
  CreatedCard("Introduction to  Js | Sigma web dev vedio #4", "CodewithFarhan", 5600000, 8, "41:02","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")
  CreatedCard("Introduction to  Js Og | Sigma web dev vedio #5", "CodewithFarhan", 56000000, 8, "41:02","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")
