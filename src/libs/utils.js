export class Utils {
    // Generate UID Random.
    uid(){
        const _uid = crypto.randomUUID();
        return _uid;
    }
}