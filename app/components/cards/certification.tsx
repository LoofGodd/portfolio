import Card from "../ui/card"
import Timeline, { TimelineItem } from "../ui/timeline"

export default function CertificationCard() {
  return (
    <Card id="certification" title="My Certifications">
      <Timeline>
        {certificationData.map((cer, i) => (
          <TimelineItem
            key={i}
            date={cer.date}
            title={cer.title}
            subTitle={cer.subTitle}
            link={cer.link}
            tag={cer.tag}
          />
        ))}
      </Timeline>
    </Card>
  )
}

const certificationData = [
  {
    date: "2020 - Now",
    title: "Student",
    subTitle: "RUPP processing",
    tag: "CS",
  },

  {
    date: "2022 - 2023",
    title: "Coding & Programming",
    subTitle: "Samsung X RUPP",
    link: "https://d1ecwxub6g20sv.cloudfront.net/q2rl8n%2Fpreview%2F58191183%2Fmain_large.png?response-content-disposition=inline%3Bfilename%3D%22main_large.png%22%3B&response-content-type=image%2Fpng&Expires=1716786691&Signature=QiQSInng5lCwVpzSKmhqiT-Q6a0rpmOd9qofim1DQEU7kAODrL20ctigzqCtWBoVpvlskzhEaKG7SEOvAx~eB1szYD4aVRNKpDPME~0BfLQU2VZjUh~frqzyG0~JxbsbpegA8ETJQBskpP0hg4-aFnX7Owg3QTnW8MhzUn~Vu7rib~OhSEN-RgkW9Ns7l2in18rUH7KNtmCjwevXCXgUNb~MYg49aF-6GYnHEhDd-LXMZTixwRhJ-NLSPCUVl7wukinoYZD4wZ2gbIWn1nBNB9A0aMY2kgTgzkSPb-2vfhj9cqZFqE7ezYth1zS3S8uxcMR-n81knIqBfH2R3-2TjA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
    tag: "CS",
  },

  {
    date: "2022 - 2022",
    title: "NICC Competition",
    subTitle: "Bootcamp",
    link: "https://dcngygx2lorho.cloudfront.net/s4pl8n%2Fpreview%2F58191181%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1716787076&Signature=ezSX5wq5BzMfA9OH2hpXuVJKzFsB0ebCKFtKU--XS1mKXMOUT93NZ1gM1VDMHbbrCIiLFatU1~WO1EysrGy8P1lrRhtie3mevpNhpf3Vutq9aenPtboe8v4QQYOE2Td1VUp0UolU2ga8F~3KGjJyQ6tJA5GWpU2dpKUnito5LjSK-QpVzBLmtpunFHbDriHxpS4hc8rCF2XpVsROjyvpHOosOku~FQ6G-dT2mzIqlxtgxByjH9g-MfYAnOAHzzSubEA2JWduxqWdu3tfL63ysf3EBZjp4Ncz7sO3hQyTo8rX8~VZRynCyRLgyja6-BkXFzrdRLL1Z9WCMH6vkuAkUw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
    tag: "Other",
  },

  {
    date: "2023 - 2023",
    title: "Big Data",
    subTitle: "Samsung X RUPP",
    link: "https://d3eayuasuez6q2.cloudfront.net/j0nl8n%2Fpreview%2F58191179%2Fmain_full.png?response-content-disposition=inline%3Bfilename%3D%22main_full.png%22%3B&response-content-type=image%2Fpng&Expires=1716786942&Signature=YvR04HpakuyE4abLwl6MLfxrzmVCJSGzdAR9akX-OXZPL7tFWcXAcpXMIx~hyCArSDJfpSlzHWpbv7yJzP6kwWM8V9nPHc8~m5B8jjiYAHe7Vh6ghK-4bjPT0QsgubdgL9zxPTBJxMDiYZlksx04nvLTEExiGbe5Ivip-9GTVEWAhSK1i-h09pAueBXmb4HtmiHbN1-JBUQ0uewIdSGYy9gqYmZ0nQD~Kxfkb1CIyi3G1CYVljoHU-Zkncr8DClbqVc~tzJSNJv4tdxTF4PXinD3k-V1Gkj3B-WfJIv6zbx0N47bs9bzrK42kaB-gWd3FfBbkYTefj7ARd37cwQuiA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
    tag: "Data",
  },

  {
    date: "2022 - 2023",
    title: "Essentail Cyber",
    subTitle: "SalaCyber",
    link: "https://d1hwc73pt3t7we.cloudfront.net/v0ol8n%2Fpreview%2F58191180%2Fmain_large.png?response-content-disposition=inline%3Bfilename%3D%22main_large.png%22%3B&response-content-type=image%2Fpng&Expires=1716787005&Signature=QzQqChs3VZSwKxahlt6cEAWAYN~3oW91hSvB9CEjsNPbF24h3ihaazvSUmTTfn~sdNQnOoFewcz3Dp6OAHbAXoIgGwsZXfjQdm7p4IWfbWGrwya52xYBy2HZ6BSKNRU6vH6Ql106oM2VpfVPmMb2iR20rMAutzgiNCEqB3bOxw3Cb-obfQ8QzLFYB8nRrD0UzfaFsYECDdvLy9R8ba5HDZPfw153uINspxcCoAq4Py64zy9EOoMvUe2sRfvQATgawNf58XA5debD0yCiiYmIzIVSZKsfnbcI-PKpUrvZwDGuIK5QCM-nLdF9MnRZ4uVaYpcpY~4oxIhYUgzGFucNMg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
    tag: "Cyber",
  },
]
