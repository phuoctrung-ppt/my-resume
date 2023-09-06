import cls from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const link = [
  {
    href: '/about',
    title: 'about',
  },
  {
    href: '/resume',
    title: 'resume',
  },
  {
    title: 'project',
  },
  {
    title: 'blog',
  },
  {
    title: 'contact',
  },
];

export const NavBar = () => {
  const href = useLocation();
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <ul
        className={`nav before:content-[''] before:h-full before:absolute before:top-0 before:-left-32 before:bg-cover before:w-32 before:-z-10`}
      >
        {link.map((item) => (
          <li
            key={item.title}
            onClick={() => navigate(item.href ?? '#')}
            className={cls(
              `nav__item ${href.pathname === item.href ? 'active' : ''} ${
                item.href ? '' : 'notImplement'
              }`,
            )}
          >
            <Link
              className={cls(
                `nav__item ${href.pathname === item.href ? 'active' : ''} ${
                  item.href ? '' : 'notImplement'
                }`,
              )}
              to={item.href ?? '#'}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
