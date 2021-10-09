import React from 'react'

function Unmounting() {
    return (
        <div className="comp">
            <div class="words">
            <span>U</span>
  <span>N</span>
  <span>M</span>
  <span>O</span>
  <span>U</span>
  <span>N</span>
  <span>T</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>
            <p>The componentWillUnmount() method allows us to execute the React code when the component gets destroyed or unmounted from the DOM (Document Object Model). This method is called during the Unmounting phase of the React Life-cycle i.e before the component gets unmounted.

All the cleanups such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() should be coded in the componentWillUnmount() method block.

Tip: Never call setState() in componentWillUnmount() method.

Syntax:

componentWillUnmount()</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis optio atque dolor animi asperiores eveniet similique impedit et vel. Sint, cupiditate. Dolores quidem doloribus maxime dicta, perspiciatis qui, aliquid sed asperiores similique unde nulla doloremque dolorem placeat, mollitia nisi! Amet modi velit a esse reprehenderit, minima libero possimus deserunt provident sapiente quas rem consectetur hic laboriosam repellendus sed debitis autem ipsum aspernatur aliquid corporis, quos illum! Nesciunt voluptates iusto doloribus cumque dicta, optio officia obcaecati dolorem sunt earum fugit vitae ducimus sed debitis omnis at in distinctio incidunt minus laudantium, modi, ex possimus aperiam explicabo? Animi, beatae? Odio, dolor. Hic quis tempore rerum beatae suscipit quas autem illo quia soluta veritatis. Quisquam assumenda porro tenetur laboriosam quidem, est nisi facilis, explicabo nulla nemo aliquid modi distinctio reiciendis nam blanditiis ut totam inventore in illo optio similique laborum quos? Ducimus, blanditiis magni debitis harum, totam pariatur ratione consequuntur in repellat voluptatum quia inventore cumque minima modi sint molestiae! Perspiciatis ullam, possimus similique ipsa ducimus praesentium minima quaerat quae excepturi earum iste officia ea vel, animi nostrum voluptate exercitationem nesciunt rerum delectus modi beatae perferendis molestiae adipisci. Id itaque magni velit explicabo saepe molestias suscipit nulla, esse maiores! Quam, laboriosam aperiam.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis optio atque dolor animi asperiores eveniet similique impedit et vel. Sint, cupiditate. Dolores quidem doloribus maxime dicta, perspiciatis qui, aliquid sed asperiores similique unde nulla doloremque dolorem placeat, mollitia nisi! Amet modi velit a esse reprehenderit, minima libero possimus deserunt provident sapiente quas rem consectetur hic laboriosam repellendus sed debitis autem ipsum aspernatur aliquid corporis, quos illum! Nesciunt voluptates iusto doloribus cumque dicta, optio officia obcaecati dolorem sunt earum fugit vitae ducimus sed debitis omnis at in distinctio incidunt minus laudantium, modi, ex possimus aperiam explicabo? Animi, beatae? Odio, dolor. Hic quis tempore rerum beatae suscipit quas autem illo quia soluta veritatis. Quisquam assumenda porro tenetur laboriosam quidem, est nisi facilis, explicabo nulla nemo aliquid modi distinctio reiciendis nam blanditiis ut totam inventore in illo optio similique laborum quos? Ducimus, blanditiis magni debitis harum, totam pariatur ratione consequuntur in repellat voluptatum quia inventore cumque minima modi sint molestiae! Perspiciatis ullam, possimus similique ipsa ducimus praesentium minima quaerat quae excepturi earum iste officia ea vel, animi nostrum voluptate exercitationem nesciunt rerum delectus modi beatae perferendis molestiae adipisci. Id itaque magni velit explicabo saepe molestias suscipit nulla, esse maiores! Quam, laboriosam aperiam.</p>
        </div>
        
    )
}

export default Unmounting
