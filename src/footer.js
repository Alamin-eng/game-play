
export default function Footer(){
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Copyright © {year} Created with ❤️️ by Mohammad Alamin
      </div>
    );
}