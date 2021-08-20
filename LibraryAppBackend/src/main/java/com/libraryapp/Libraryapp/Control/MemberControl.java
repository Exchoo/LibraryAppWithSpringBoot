package com.libraryapp.Libraryapp.Control;


import com.libraryapp.Libraryapp.model.Manager;
import com.libraryapp.Libraryapp.model.Member;
import com.libraryapp.Libraryapp.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
public class MemberControl {

    private final MemberService memberService;


    public MemberControl(MemberService memberService) {
        this.memberService = memberService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Member>> getAllMembers(){ //ResponseE. içine direkt manager list alıyor
        List<Member> members = memberService.findAllMember();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Member>getMembersById(@PathVariable("id") Long id){ //ResponseE. içine direkt manager alıyor
        Member members= memberService.findMemberById(id);
        return new ResponseEntity<>(members, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Member> addManager(@RequestBody Member member){
        Member newMember= memberService.addMember(member);
        return new ResponseEntity<>(newMember, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Member> updateMember(@RequestBody Member member){
        Member updateMember= memberService.updateMember(member);
        return new ResponseEntity<>(updateMember, HttpStatus.OK);
    }

    @DeleteMapping(value="/delete/{id}")
    public ResponseEntity<Boolean> deleteMember(@PathVariable("id") Long id){
        memberService.MemberdeleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
