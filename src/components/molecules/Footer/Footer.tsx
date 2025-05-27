import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="flex h-14 w-full justify-center border-t border-dashed border-gray-200 dark:border-white/15">
      <div className="flex w-[80rem] items-center justify-center gap-x-2 md:border-x md:border-dashed md:border-gray-200 md:dark:border-white/15">
        <p className="text-primary/65 text-xs font-light md:text-sm dark:text-white/65">
          Built by
          <span className="text-primary dark:text-white"> Alex Santos.</span>
          &nbsp;Source code available on &nbsp;
          <Link
            to="https://github.com/alexsantosquispe/jsonplaceholder-api-test"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline dark:text-white"
          >
            Github
          </Link>
        </p>
      </div>
    </footer>
  );
};
