const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const render = (todos) => {
  let ans = [];
  todos.map(({ id, content, completed }) => {
    ans += `        <li id ="${id}">
          <label><input type="checkbox"${
            completed ? " checked" : ""
          }>${content}</label>
        </li>\n`;
  });
  return ans;
};
console.log(render(todos));

/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
