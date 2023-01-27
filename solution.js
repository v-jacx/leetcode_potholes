const solution = (S, B) => {
    const re = /x/gi;
    let potholes = 0;
    let fixed = 0;

    if(!re.test(S)){
        return fixed;
    }

    for(i=0; i<=S.length; i++){
        if(S[i]==='x' && S.length !== i){
            potholes++;
        }else{
            if(S[i]==='x' && S.length === i){
                potholes++;
            }
            for(j=0; j < potholes; j++){
                const fixing = potholes - j;
                if (fixing > 1 && (fixing + 1 <= B)){
                    B -= (potholes + 1);
                    fixed += fixing;
                    potholes = 0;
                }
            }
            potholes = 0;
        }
    }

    if(B!==0){
        for(i=0; i<=S.length; i++){
            if(S[i]==='x' && S.length !== i){
                potholes++;
            }else{
                if(S[i]==='x' && S.length === i){
                    potholes++;
                }
                if(potholes === 1 && potholes + 1 <= B){
                    B-= (potholes + 1);
                    fixed++;
                }
                potholes = 0;
        }
    }}

    return fixed;
}

module.exports = solution;