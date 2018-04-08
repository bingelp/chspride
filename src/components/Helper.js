
export default function convertLevelToColor(level){
    switch (level.toLowerCase()) {
                case 'red':
                    return 'danger';
                    break;
                case 'orange':
                    return 'warning';
                    break;
                case 'yellow':
                    return "caution";
                    break;
                case 'green':
                    return "success";
                    break;
                case 'blue':
                    return "info";
                    break;
                default:
                    return "royal";
                    break;
            }
}
