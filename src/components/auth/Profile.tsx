export type ProfileProps ={
  name: string
}

export const Profile = ({name}:ProfileProps) => {
    return <div>Prvate Profile component. Name is {name}</div>;
  };