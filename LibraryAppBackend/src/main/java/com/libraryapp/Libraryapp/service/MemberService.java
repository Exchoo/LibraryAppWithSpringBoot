package com.libraryapp.Libraryapp.service;

import com.libraryapp.Libraryapp.exception.UserNotFoundException;
import com.libraryapp.Libraryapp.model.Manager;
import com.libraryapp.Libraryapp.model.Member;
import com.libraryapp.Libraryapp.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member addMember(Member member){
        member.setMemberCode(UUID.randomUUID().toString());
        return memberRepository.save(member);
    }

    public List<Member> findAllMember(){
        return memberRepository.findAll();
    }

    public Member updateMember(Member member){
        return  memberRepository.save(member);
    }

    public Member findMemberById(Long id) {
        return memberRepository.findMemberById(id).orElseThrow(()-> new UserNotFoundException( "User by ıd "+ id +"was not found.")); //UserNotFound'un classını biz oluşturduk.
    }

    public void deleteMember(Long id){
        memberRepository.deleteMemberById(id);
    }

    public void MemberdeleteById(Long id){
        memberRepository.deleteById(id);
    }


}
