import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <header>About header</header>
        <main>
            {children}
        </main>
        <footer>About footer</footer>
    </div>
  )
}

export default layout