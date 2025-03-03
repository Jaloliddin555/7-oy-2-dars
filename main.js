const wrapper = document.querySelector(".wrapper");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
      // Create the table once
      const table = document.createElement("table");
      table.className = "table";
      table.innerHTML = `
          <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
          </tr>
      `;

      // Append each row to the table
      data.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${item.id}</td>
              <td>${item.title}</td>
              <td>${item.completed ? "✔" : "✖"}</td>
          `;
          table.appendChild(row);
      });

      // Append the table to the wrapper
      wrapper.appendChild(table);
  })
  .catch(error => console.error("Error fetching data:", error));
