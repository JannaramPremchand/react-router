import React from 'react';


function Mounting() {
    return (
        <div className="comp">
            <div class="words">
  <span>M</span>
  <span>O</span>
  <span>U</span>
  <span>N</span>
  <span>T</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>
<div>
            <p>Mounting is the process of outputting the virtual representation of a component into the final UI representation (e.g. DOM or Native Components).

In a browser that would mean outputting a React Element into an actual DOM element (e.g. an HTML div or li element) in the DOM tree. In a native application that would mean outputting a React element into a native component. You can also write your own renderer and output React components into JSON or XML or even XAML if you have the courage.

So, mounting/unmounting handlers are critical to a React application, because you can only be sure a component is output/rendered when it is mounted. However, the componentDidMount handler is invoked only when rendering to an actual UI representation (DOM or Native Components) but not if you are rendering to an HTML string on the server using renderToString, which makes sense, since the component is not actually mounted until it reaches the browser and executes in it.

And, yes, Mounting is also an unfortunate/confusing name, if you ask me. IMHO componentDidRender and componentWillRender would be much better names</p> <br/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis optio atque dolor animi asperiores eveniet similique impedit et vel. Sint, cupiditate. Dolores quidem doloribus maxime dicta, perspiciatis qui, aliquid sed asperiores similique unde nulla doloremque dolorem placeat, mollitia nisi! Amet modi velit a esse reprehenderit, minima libero possimus deserunt provident sapiente quas rem consectetur hic laboriosam repellendus sed debitis autem ipsum aspernatur aliquid corporis, quos illum! Nesciunt voluptates iusto doloribus cumque dicta, optio officia obcaecati dolorem sunt earum fugit vitae ducimus sed debitis omnis at in distinctio incidunt minus laudantium, modi, ex possimus aperiam explicabo? Animi, beatae? Odio, dolor. Hic quis tempore rerum beatae suscipit quas autem illo quia soluta veritatis. Quisquam assumenda porro tenetur laboriosam quidem, est nisi facilis, explicabo nulla nemo aliquid modi distinctio reiciendis nam blanditiis ut totam inventore in illo optio similique laborum quos? Ducimus, blanditiis magni debitis harum, totam pariatur ratione consequuntur in repellat voluptatum quia inventore cumque minima modi sint molestiae! Perspiciatis ullam, possimus similique ipsa ducimus praesentium minima quaerat quae excepturi earum iste officia ea vel, animi nostrum voluptate exercitationem nesciunt rerum delectus modi beatae perferendis molestiae adipisci. Id itaque magni velit explicabo saepe molestias suscipit nulla, esse maiores! Quam, laboriosam aperiam.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis optio atque dolor animi asperiores eveniet similique impedit et vel. Sint, cupiditate. Dolores quidem doloribus maxime dicta, perspiciatis qui, aliquid sed asperiores similique unde nulla doloremque dolorem placeat, mollitia nisi! Amet modi velit a esse reprehenderit, minima libero possimus deserunt provident sapiente quas rem consectetur hic laboriosam repellendus sed debitis autem ipsum aspernatur aliquid corporis, quos illum! Nesciunt voluptates iusto doloribus cumque dicta, optio officia obcaecati dolorem sunt earum fugit vitae ducimus sed debitis omnis at in distinctio incidunt minus laudantium, modi, ex possimus aperiam explicabo? Animi, beatae? Odio, dolor. Hic quis tempore rerum beatae suscipit quas autem illo quia soluta veritatis. Quisquam assumenda porro tenetur laboriosam quidem, est nisi facilis, explicabo nulla nemo aliquid modi distinctio reiciendis nam blanditiis ut totam inventore in illo optio similique laborum quos? Ducimus, blanditiis magni debitis harum, totam pariatur ratione consequuntur in repellat voluptatum quia inventore cumque minima modi sint molestiae! Perspiciatis ullam, possimus similique ipsa ducimus praesentium minima quaerat quae excepturi earum iste officia ea vel, animi nostrum voluptate exercitationem nesciunt rerum delectus modi beatae perferendis molestiae adipisci. Id itaque magni velit explicabo saepe molestias suscipit nulla, esse maiores! Quam, laboriosam aperiam.</p> </div>

        </div>
    )
}

export default Mounting
