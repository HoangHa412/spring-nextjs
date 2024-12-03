package org.example.mycrud.utils;

import com.nimbusds.openid.connect.sdk.assurance.evidences.attachment.Digest;
import org.springframework.util.DigestUtils;

public class ServiceUtils {
    public static String generateMD5(String input){
        DigestUtils.md5Digest(input.getBytes());
        byte[] thedigest = DigestUtils.md5Digest(input.getBytes());
        StringBuilder sb = new StringBuilder();
        for (byte b : thedigest) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
}
