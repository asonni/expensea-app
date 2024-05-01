import { createFileRoute } from '@tanstack/react-router';

const About = () => {
  return <div className="p-2">About Page</div>;
};

export const Route = createFileRoute('/about')({
  component: About
});
