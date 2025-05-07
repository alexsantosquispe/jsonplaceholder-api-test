import { Link } from 'react-router-dom';

export const NavbarLogo = () => {
  return (
    <Link to="/">
      <div className="text-primary flex align-middle text-xl leading-4 md:p-0 md:text-2xl md:leading-9 dark:text-white/90">
        <p className="font-light">
          <span className="font-bold">{'{ JSON }'}</span> Placeholder
          <span className="text-accent text-5xl leading-1 font-bold dark:text-orange-400">
            .
          </span>
        </p>
      </div>
    </Link>
  );
};
