/*

\/ /  \/ /  \/ / / 
\  / /\  / /\  / / /
/  \/ /  \/ /  \ \ \
 /\  / /\  / /\ \ \ 
 \/ /  \ \/ / / /  \
\  / /\ \  / / / /\ 
/  \/ / /  \ \/ / / 
 /\  / / /\ \  / / /
/ /  \ \ \/ / / /  \
 / /\ \ \  / / / /\
 
 
*/

const chars = ['/\\', '/  \\'];
for (let i = 0; i < 10; i++) {
  const row = [];
  for (let j = 0; j < 10; j++) {
  row.push((chars[Math.floor(Math.random() * 2)]));
  }
  console.log(...row);
}