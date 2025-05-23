type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

type TMenuItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
};

// user param
type TCreateUserParam = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};

export { TActiveLinkProps, TMenuItem, TCreateUserParam };
