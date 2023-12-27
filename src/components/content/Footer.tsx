export default function Footer() {
    return (
      <footer>
        <span className="flex items-center justify-center py-4 px-4 mb-4">
          &copy;&nbsp;
          <span>{new Date().getFullYear()} Tom Nyuma &nbsp;| &nbsp;</span>
          <a
            href="mailto:tomenyuma@gmail.com?subject=%5BINQ%5D%20Hello%20From%20Your%20Website!%20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl underline-offset-4 hover:underline text-orange-600"
          >
            or Email Me!
          </a>
        </span>
      </footer>
    );
}