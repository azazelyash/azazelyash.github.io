export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>Yash Vishwakarma · {new Date().getFullYear()}</p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:jss.yash085@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
