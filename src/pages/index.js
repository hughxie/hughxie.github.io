import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import emojis from './emojis.json';


const links = ['https://github.com/hughxie', 'https://www.linkedin.com/in/hughxie/', 'https://www.instagram.com/hugh.xie/']


export default function IndexPage() {
  const [top, setTop] = useState(Math.floor(Math.random() * (70 - 17) + 17))
  const [left, setLeft] = useState(Math.floor(Math.random() * (85 - (-10)) + (-10)))
  const [emoji, setEmoji] = useState(emojis[Math.floor(Math.random()*emojis.length)])
  const [link, setLink] = useState(links[Math.floor(Math.random()*links.length)])


  useEffect(() => {
    setTimeout(setTime, 3);
  }, [left])



  const setTime = () => {
    if (left > 85) {
      setLeft(-10)
      setTop(Math.floor(Math.random() * (70 - 17) + 17))
      setEmoji(emojis[Math.floor(Math.random()*emojis.length)])
      setLink(links[Math.floor(Math.random()*links.length)])
      return;
    }
    setLeft(left + 0.2)
  }


  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>HUGH XIE</h1>
        <h3>(Click me 👇)</h3>
      </div>
      <div
        style={{
          overflow: `hidden`,
          maxWidth: `100vw - 30px`,
        }}
      >
      <div
        id="moving-box"
        style={{
          top: `${top}vh`,
          left: `${left}vw`,
          position: `absolute`,
          height: `auto`,
          width: `auto`,
        }}
      >
      <a target="_blank" href={link}>
        <h2>
          {emoji}
        </h2>
      </a>
      </div>

      </div>
    </Layout>
  )
}

