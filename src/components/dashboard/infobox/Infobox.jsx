import "./infobox.css"

const Infobox = () => {

    return (
    <div className="infobox-container">
        <div className="infobox">
    <h2>1. Disposable</h2>
    <p>Explanation: A "disposable" email address is a temporary, often automatically generated email address that is used for a short period or until a few emails are received. It is commonly used to avoid spam or register on websites without exposing your personal email address. These addresses are typically deleted after a short time and are no longer accessible.</p>
</div>
<div className="infobox">
<h2>2. DNS (Domain Name System)</h2>
<p>Explanation: DNS is a system that translates domain names (like www.example.com) into IP addresses that computers use to communicate over the internet. It works like a phonebook: when you type a website address, DNS retrieves the corresponding IP address, allowing your browser to locate and display the website. In simple terms, DNS helps convert human-readable addresses into machine-readable ones.</p>
</div>
<div className="infobox">
<h2>3. Domain</h2>
<p>Explanation: A domain is the name of a website or network resource on the internet that allows access without needing to input the IP address directly. For example, in the URL www.example.com, the "example.com" part is the domain. Domains are typically divided into different levels, with the Top-Level Domain (TLD), such as .com, .org, or .net, being the highest level.</p>
</div>
<div className="infobox">
<h2>4. Email</h2>
<p>Explanation: An email is a method of sending and receiving digital messages over the internet. An email address typically consists of a username (e.g., username) followed by the "@" symbol and a domain name (e.g., example.com). Email is one of the most common forms of communication for both personal and professional use.</p>
</div>
<div className="infobox">
<h2>5. Format</h2>

<p>Explanation: "Format" refers to the structure or organization of something, often used to describe the way data or content is arranged. In the context of emails or files, it refers to how the information is structured (e.g., text, HTML, or PDF formats). For example, an email format can be plain text or rich text (HTML).</p>
</div>
<div className="infobox">
<h2>6. Whitelist</h2>
<p>Explanation: A "whitelist" is a list of approved or trusted entities, such as email addresses or IP addresses. If an email address or domain is on a whitelist, emails sent from that address are considered safe and will not be marked as spam. Whitelisting is used as a way to allow only trusted sources to bypass filters or restrictions.</p>
</div>
    </div>)
}

export default Infobox;