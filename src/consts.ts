export interface CommitteeMemberInfo {
    name: string;
    position: string;
}

export const COMMITTEE_MEMBERS: CommitteeMemberInfo[] = [
    {
        name: "Dhruv Trehan",
        position: "President"
    }, {
        name: "Greg Kurzepa",
        position: "Vice-President and Secretary"
    }, {
        name: "Jack Nicholas",
        position: "Treasurer"
    }, {
        name: "Monami Yoshioka",
        position: "Head of Events"
    }
]

export const WEB_ROOT = "https://pemtech.soc.srcf.net"; // without slash

// convert image.jpg -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB image-converted.jpg
