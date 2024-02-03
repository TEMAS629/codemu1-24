import React from 'react';

function App() {
	const str1 = 'text1';
	const str2 = 'text2';
  const name = 'user';
	const age  = '30';
  const arr = [1, 2, 3, 4, 5];
  const obj = {name: 'john', surname: 'smit'};
  const attr = 'block';
  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;
  const items = <><li>text1</li><li>text2</li><li>text3</li></>
  const num1 = 3;
	const num2 = 2;
  const names = 'john';
	const surnames = 'smit';
  const num = 4;
  //ЗАДАНИЯ 1-6 ВВОДНЫЕ)
  return <div>

  {/* ЗАДАНИЕ №7 */}
		<p className='hi'>Hello</p>
    <p className='work'>world</p>
    <p className='alarm'>!</p>
	
  
  {/* ЗАДАНИЕ 8 */}
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>0</li>
	</ul>
{/* ЗАДАНИЕ 9 */}
{/* тег ul должен иметь родительский div или <></> */}
<>
  <ul>
			<li>text1</li>
			<li>text2</li>
			<li>text3</li>
		</ul>
</>

{/* ЗАДАНИЕ 10 */}
{/* тег ul должен иметь родительский div или <></> */}
<>
<ul>
		<li>text1</li>
		<li>text2</li>
		<li>text3</li>
	</ul>
	<ul>
		<li>text1</li>
		<li>text2</li>
		<li>text3</li>
	</ul>
</>

{/* ЗАДАНИЕ 11 */}
{/* по правилам React в этом случае вместо тега <input> нужно писать тег <input /> */}
<input/>

{/* ЗАДАНИЕ 12 */}
<input/><input/><input/>

{/* ЗАДАНИЕ 13 */}
<div>
		<p>{str1}</p>
		<p>{str2}</p>
	</div>

{/* ЗАДАНИЕ 14 */}
<div>
		name: {name}
		age:  {age}
	</div>;

{/* ЗАДАНИЕ 15 */}
<>
<ul>
  <li>{arr[0]}</li>
  <li>{arr[1]}</li>
  <li>{arr[2]}</li>
  <li>{arr[3]}</li>
  <li>{arr[4]}</li>
</ul>
</>

{/* ЗАДАНИЕ 16 */}
<>
<p> name:    {obj.name}</p>
<p>surname: {obj.surname}</p>

</>

{/* ЗАДАНИЕ 17 */}
<div id={attr}>
		text
	</div>

{/* ЗАДАНИЕ 19 */}
<>
<ul>
  {li1}
  {li2}
  {li3}
</ul>
</>

{/* ЗАДАНИЕ 20 */}
{/* в костанте теги li заключить в общий тег */}
<ul>
		{items}
	</ul>

{/* ЗАДАНИЕ 22 */}
<div>
		<input/>
    <br/>
    <input/>
    <br/>
    <input/>
</div>;


{/* ЗАДАНИЕ 23 */}

{/* 23.1 */}
<div>
		<ul>
      <li>ок</li>
      <li>ок</li>
      <li>ок</li>
      <li>ок</li>
      <li>ок</li>
      <li>ок</li>
      <li>ок</li>
      <li>ок</li>
      <li>ок</li>
      <li>ок</li>
    </ul>
	</div>;

  {/* 23.2 */}
  <table>
		<tbody>
			<tr>
				<td>1</td>
				<td>2</td>
        <td>3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>5</td>
        <td>6</td>
			</tr>
      <tr>
				<td>7</td>
				<td>8</td>
        <td>9</td>
			</tr>
		</tbody>
	</table>;


{/* ЗАДАНИЕ 24 */}

result: {num1 ** num2} {/* получится 9) */}
result: {names + ' ' + surnames} {/* получится john smith */}
result: {Math.sqrt(num)} {/* получится 2 */}

  </div>;
}

export default App;
