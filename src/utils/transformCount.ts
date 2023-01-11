export function transformCount(count: number) {
    let newCount: string;
    if(count >= 10000){
        newCount = Math.floor(count/10000) + '万';
    }else{
        newCount = count.toString();
    }
    return newCount;
}
