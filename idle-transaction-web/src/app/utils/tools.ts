export function changeDate(timestamp: string) {
    const originalDateString = timestamp;
    const originalDate = new Date(originalDateString);

    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的，需要加1
    const day = originalDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}