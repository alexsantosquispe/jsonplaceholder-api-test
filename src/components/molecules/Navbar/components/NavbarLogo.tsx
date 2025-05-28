import { Link } from 'react-router-dom';

export const NavbarLogo = () => {
  return (
    <Link to="/">
      <div className="text-primary flex align-middle text-xl leading-4 md:p-0 dark:text-white">
        <p className="font-extrabold">
          <span className="text-accent dark:text-orange-500">{'{ '}</span>JSON
          <span className="text-accent dark:text-orange-500">{' }'}</span>
          <span className="font-light"> Placeholder</span>
          <span className="text-accent text-4xl leading-2 dark:text-orange-500">
            .
          </span>
        </p>
      </div>
    </Link>
  );
};
