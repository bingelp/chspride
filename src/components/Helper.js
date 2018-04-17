export default function convertLevelToColor(level) {
    switch (level) {
        case 1:
            return 'danger';
        case 2:
            return 'warning';
        case 3:
            return "caution";
        case 4:
            return "success";
        case 5:
            return "info";
        default:
            return "royal";
    }
}
