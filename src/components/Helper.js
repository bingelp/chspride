
export default function convertLevelToColor(level){
    switch (level) {
                case 1:
                    return 'danger';
                    break;
                case 2:
                    return 'warning';
                    break;
                case 3:
                    return "caution";
                    break;
                case 4:
                    return "success";
                    break;
                case 5:
                    return "info";
                    break;
                default:
                    return "royal";
                    break;
            }
}
